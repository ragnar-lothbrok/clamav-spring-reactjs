import React, { Component } from 'react';
import { Box, Text, Anchor} from 'grommet';
import { Sidebar } from 'grommet-controls';
class SideBar extends Component {
    render() {
        return (<Box align='center'>
            <Sidebar title='My title' border={{ size: 'small' }} width='small' basis='small'>
                <Anchor>Side item1</Anchor>
                <Anchor>Side item2</Anchor>
                <Text>Side item3</Text>
            </Sidebar>
        </Box>);
    }
}

export default SideBar;