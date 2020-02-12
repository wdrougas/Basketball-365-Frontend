import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Segment, Grid, List, Image} from 'semantic-ui-react'
import ParticlesContainer from './ParticlesContainer'

class Standings extends React.Component {
  render() {
    return (
      <div>
      <ParticlesContainer />
          <h2>Standings</h2>
          
            <Grid columns={2} relaxed='very' >
              <Grid.Column id='Standing-Column'>
                
              <h3>Eastern Conference</h3>
                <List>
                {this.props.standings.map(standing => {
                  if (standing.conference === 'east') {
                    return <Segment vertical >
                    <List.Item>
                    <Grid columns={3}   >
                    <Grid.Row className='Standing-Row'>
                      <Grid.Column>
                      <Image id='Image' size='tiny' src={standing.team_logo} />
                      </Grid.Column>
                      
                       
                        <Grid.Column className='Standing-Team'>
                        <Link to={`/teams/${standing.team_id}`}>{standing.team_name} </Link>
                        </Grid.Column>
                        <Grid.Column className="Standing-Record">
                        {standing.win} - {standing.loss}
                        </Grid.Column>
                
                    
                    </Grid.Row>
                    </Grid>
                    </List.Item>
                    </Segment>
                }})}
                </List>
                
              </Grid.Column>
              <Grid.Column id="Standing-Column">
                
                <h3>Western Conference</h3>
            
                <List >
                {this.props.standings.map(standing => {
                  if (standing.conference === 'west') { 
                    return <Segment vertical >
                    <List.Item>
                      <Grid columns={3} >
                        <Grid.Row className='Standing-Row'>
                      <Grid.Column >
                      <Image id="Image" size='tiny' src={standing.team_logo} />
                      </Grid.Column>
                      <Grid.Column className='Standing-Team'>
                        <Link to={`/teams/${standing.team_id}`}>{standing.team_name}</Link>
                        </Grid.Column>
                        <Grid.Column className="Standing-Record">
                        {standing.win} - {standing.loss}
                        </Grid.Column>
                      </Grid.Row>
                      </Grid>
                    </List.Item>
                </Segment>
                }})}
                </List>
                
                
              </Grid.Column>
            </Grid>
         
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      standings: state.standings.sort(function(a,b) {
        return a.loss - b.loss
      })
  }
}

export default withRouter(connect(mapStateToProps)(Standings))