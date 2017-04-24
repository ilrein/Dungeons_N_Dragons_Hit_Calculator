import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Button, Modal, Icon } from 'semantic-ui-react';
import ReactTooltip from 'react-tooltip';

import styles from './styles.scss';
import {
  DMG_TIP,
  CRIT_PERC_TIP,
  SHOCK_BONUS_DMG_TIP,
  FIRE_BONUS_DMG_TIP,
  COLD_BONUS_DMG_TIP,
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
              <Heading title="Attacker" as="h4" />
            </Grid.Column>
            <Grid.Column>
              <Heading title="Defender" as="h4" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="violet" data-tip={DMG_TIP}>
              <Input
                label="DMG"
                color="black"
                onChange={(e) => this.setStat('dmg', e.target.value)}
              />
            </Grid.Column>

            <Grid.Column color="teal">
              <Input
                label="ARMOR"
                color="black"
                onChange={(e) => this.setStat('armor', e.target.value)}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="violet" data-tip={CRIT_PERC_TIP}>
              <Input
                label="CRIT %"
                color="black"
              />
            </Grid.Column>

            <Grid.Column color="teal">
              <Input
                label="EVASION"
                color="black"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="violet" data-tip={SHOCK_BONUS_DMG_TIP}>
              <Input
                label="SHOCK"
                color="yellow"
              />
            </Grid.Column>

            <Grid.Column color="teal">
              <Input
                label="SHOCK RESIS"
                color="yellow"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="violet" data-tip={FIRE_BONUS_DMG_TIP}>
              <Input
                label="FIRE"
                color="red"
              />
            </Grid.Column>

            <Grid.Column color="teal">
              <Input
                label="FIRE RESIS"
                color="red"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="violet" data-tip={COLD_BONUS_DMG_TIP}>
              <Input
                label="COLD"
                color="blue"
              />
            </Grid.Column>

            <Grid.Column color="teal">
              <Input
                label="COLD RESIS"
                color="blue"
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
