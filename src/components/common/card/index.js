import React, { PureComponent } from 'react';


import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';


import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Card.scss';


export default class Cards extends PureComponent {

    render() {
        const {
            title,
            description,
          image,
            remove= false,
            id
        } = this.props;

        return (
            <div className="CardMarginBottom">
                <Card className="card">
                   <Avatar src={image} className="cardAvatar"/>
                    <div className="cardTextSection">
                        <div className="cardTitleSection">
                          {title}2018 All Star Las Vegas
                        </div>
                        <div className="cardDescriptionSection">
                          {description}The sixth international League of Legends All-Star event is heading to Las Vegas. 64 players will be in attendance.
                        </div>
                    </div>
                  {remove && <div className="cardClose" onClick={() => remove(id)}>
                    <Icon className="far fa-times-circle"/>
                  </div>
                  }
                </Card>
            </div>
        );
    }
}
