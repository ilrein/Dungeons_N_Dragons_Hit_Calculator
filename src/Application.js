import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Button, Modal, Icon, Header } from 'semantic-ui-react';
import ReactTooltip from 'react-tooltip';

import styles from './styles.scss';
import {
  // attacker tips
  DMG_TIP,
  DESOLATE_TIP,
  CRIT_PERC_TIP,
  SHOCK_BONUS_DMG_TIP,
  FIRE_BONUS_DMG_TIP,
  COLD_BONUS_DMG_TIP,
  // defender tips
  HP_TIP,
  ARMOR_TIP,
  EVASION_TIP,
  SHOCK_RESIS_TIP,
  FIRE_RESIS_TIP,
  COLD_RESIS_TIP,
} from './tips';

import Heading from './ui/Heading';
import Input from './ui/Input';

class Application extends Component {
  state = {
    whackModalVisible: false,
    whackModalResult: {},
  }

  setStat = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  }

  whack = () => {
    /**
     * do some maths here
     */
    const result = 1;
    this.setState({
      ...this.state,
      whackModalVisible: true,
      whackModalResult: result,
    });
  }

  closeWhackModal = () => {
    this.setState({ ...this.state, whackModalVisible: false, whackModalResult: {}});
  }

  render() {
    return (
      <section className={styles.app}>
        <ReactTooltip />
        <Modal
          open={this.state.whackModalVisible}
          basic
          size="small"
          onClose={this.closeWhackModal}
        >
          <Modal.Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.closeWhackModal} inverted>
              <Icon name='checkmark' /> Got it
            </Button>
          </Modal.Actions>
        </Modal>
        <Grid divided="vertically">
          <Grid.Row centered>
            <Heading
              title="Hit Calculator"
              as="h1"
            />
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h2" className={styles.attacker}>
                Attacker
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" className={styles.defender}>
                Defender
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="red" data-tip={DMG_TIP}>
              <Input
                label="DMG"
                color="black"
                onChange={(e) => this.setStat('dmg', e.target.value)}
              />
            </Grid.Column>

            <Grid.Column color="blue" data-tip={HP_TIP}>
              <Input
                label="HP"
                color="black"
                onChange={(e) => this.setStat('hp', e.target.value)}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="red" data-tip={DESOLATE_TIP}>
              <Input
                label="Desolate"
                color="black"
                onChange={(e) => this.setStat('desolate', e.target.value)}
              />
            </Grid.Column>

            <Grid.Column color="blue" data-tip={ARMOR_TIP}>
              <Input
                label="ARMOR"
                color="black"
                onChange={(e) => this.setStat('armor', e.target.value)}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="red" data-tip={CRIT_PERC_TIP}>
              <Input
                label="CRIT %"
                color="black"
              />
            </Grid.Column>

            <Grid.Column color="blue" data-tip={EVASION_TIP}>
              <Input
                label="EVASION"
                color="black"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="red" data-tip={SHOCK_BONUS_DMG_TIP}>
              <Input
                label="SHOCK"
                color="black"
              />
            </Grid.Column>

            <Grid.Column color="blue" data-tip={SHOCK_RESIS_TIP}>
              <Input
                label="SHOCK RESIS"
                color="black"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="red" data-tip={FIRE_BONUS_DMG_TIP}>
              <Input
                label="FIRE"
                color="black"
              />
            </Grid.Column>

            <Grid.Column color="blue" data-tip={FIRE_RESIS_TIP}>
              <Input
                label="FIRE RESIS"
                color="black"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="red" data-tip={COLD_BONUS_DMG_TIP}>
              <Input
                label="COLD"
                color="black"
              />
            </Grid.Column>

            <Grid.Column color="blue" data-tip={COLD_RESIS_TIP}>
              <Input
                label="COLD RESIS"
                color="black"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Button color="red" onClick={this.whack}>
              Whack
            </Button>
          </Grid.Row>
        </Grid>
      </section>
    );
  }
}

render(
  <Application />,
  document.getElementById('root')
)
