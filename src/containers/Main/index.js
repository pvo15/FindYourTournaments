import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';



import Cards  from '../../components/common/card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Autocomplete from 'react-autocomplete';
import List from '@material-ui/core/List';



import {
  fetchTournaments,
  clearTournament
} from '../../actions/Tournaments';

import './Main.scss';

const mapStateToProps = (state) => {
  return { tournament: state.tournament }
};

@connect(mapStateToProps, {
  fetchTournaments,
  clearTournament
})
export default class Main extends PureComponent {
    constructor(){
        super();
        const localTournament = JSON.parse(localStorage.getItem('selectedTournament')) || [];
        this.state = {
              search: '',
              selectedTournament: [...localTournament]
          }
    }
    getTournamentsDocument(tournaments){
      if(tournaments && tournaments.length){
        const { documents = [] } = tournaments[0];
        return _.reverse(_.sortBy(documents, ['score'])).slice(0, 10);
      }

      return [];
    }
    onChangeHendler(value){
      this.setState({ search: value}, () => {
      if (value.length > 1) {
          this.props.fetchTournaments(value);
        } else {
          this.props.clearTournament()
        }
      })
    }
    onSelectHendler(id){
      const tournament = this.getTournamentsDocument(this.props.tournament);
      const selectedItem = tournament.find((item) => item.id === Number(id));
      const { selectedTournament } = this.state;

      if(!selectedTournament.find((item) => item.id === Number(id))) {
        selectedTournament.push(selectedItem);
        this.setState({selectedTournament: [...selectedTournament]});
        localStorage.setItem('selectedTournament', JSON.stringify(selectedTournament));
      }
    }
    onRemoveHendler(id){
      const { selectedTournament } = this.state;
      const filtered = [...selectedTournament.filter((item) => item.id !== Number(id))];
      this.setState({ selectedTournament: filtered });
      localStorage.setItem('selectedTournament', JSON.stringify(filtered));

    }


    render() {
        const { tournament } = this.props;
        const { selectedTournament } = this.state;

        return (
            <div className="Main">
              <Grid container style={{ flexGrow: 1 }}>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={16}
                    className=""
                    alignItems="center"
                    direction="row"
                    justify="flex-start"
                  >
                      <Grid  item>
                        <Paper
                          className="autocompletePaper"
                        >
                          <Autocomplete
                            getItemValue={(item) => String(item.id)}
                            items={this.getTournamentsDocument(tournament)}
                            renderItem={(item) =>
                              <div key={item.id}>
                                <Cards key={item.id} {...item}/>
                              </div>
                            }
                            value={this.state.search}
                            onChange={(e, value) => this.onChangeHendler(value)}
                            onSelect={(val) => this.onSelectHendler(val)}
                          />
                        </Paper>
                      </Grid>
                      <Grid  item>
                        <Paper
                          className="selectedPaper"
                        >
                          <List style={{ paddingTop: 0 }}>
                            {selectedTournament.map((item, index) => {
                              return  <Cards key={index} {...item} remove={id => this.onRemoveHendler(id)}/>
                            })}
                          </List>
                        </Paper>
                      </Grid>

                  </Grid>
                </Grid>
              </Grid>
            </div>
        );
    }
}
