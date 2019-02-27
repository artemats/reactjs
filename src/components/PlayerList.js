import React, { Component } from 'react';

import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';

import { PlayerListItem } from "./PlayerListItem";

const audioList = [
    {
        songAuthTitle: 'Madonna',
        songTitle: '4 Minutes',
        songUrl: 'https://www.youtube.com/watch?v=aAQZPBwz2CI',
        songPreview: 'https://yt3.ggpht.com/a-/AAuE7mCu43_exEhYru9pggkOvPO8Du_lykH5Jo_7ig=s288-mo-c-c0xffffffff-rj-k-no'
    },
    {
        songAuthTitle: 'Арсен Мірзоян',
        songTitle: 'Ідіоти',
        songUrl: 'https://www.youtube.com/watch?v=YbSLOJCmXwg',
        songPreview: 'https://yt3.ggpht.com/a-/AAuE7mDTgOZ6tHtlpCi18LhYsDlsPMIzzbQLdcY28Q=s288-mo-c-c0xffffffff-rj-k-no'
    },
    {
        songAuthTitle: '#2Маши',
        songTitle: 'МАМА, Я ТАНЦУЮ',
        songUrl: 'https://www.youtube.com/watch?v=jezU0MUixaY',
        songPreview: 'https://yt3.ggpht.com/a-/AAuE7mAR73vT3ElChWuFdL6-xJa6229d68r-AoqtpQ=s288-mo-c-c0xffffffff-rj-k-no'
    },
    {
        songAuthTitle: 'Alice Merton',
        songTitle: 'No Roots',
        songUrl: 'https://www.youtube.com/watch?v=PUdyuKaGQd4',
        songPreview: 'https://yt3.ggpht.com/a-/AAuE7mARTt1gQ7aRg9pzGD5M2FRcTzz-2-XRO2UpDw=s288-mo-c-c0xffffffff-rj-k-no'
    }
];

export class PlayerList extends Component {

    render() {

        return(
            <Card>
                <List className="playlist">
                    { audioList.map((audioItem, key) => {
                        return <PlayerListItem
                            key={key}
                            audioItem={audioItem}
                        />
                    }) }
                </List>
            </Card>
        )

    }

}