import React from "react";
import { Icon, Item, List, Segment } from "semantic-ui-react";

export default function EventListItem(){
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png'/>
                        <Item.Content>
                            <Item.Header content='Event title'/>
                            <Item.Description>
                                Hosted by someone.
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> Date
                    <Icon name='marker'/> Venue
                </span>
            </Segment>
            <Segment secondary>
                <List>
                    
                </List>
            </Segment>
        </Segment.Group>
    )
}