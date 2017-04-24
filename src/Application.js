import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Button } from 'semantic-ui-react';
import ReactTooltip from 'react-tooltip';

import styles from './styles.scss';
import {
  DMG_TIP,
  CRIT_PERC_TIP,
} from './tips';

import Heading from './ui/Heading';
import Input from './ui/Input';

class Application extends Component {
  state = {}

  render() {
    return (
      <section className={styles.app}>
        <ReactTooltip />
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
              />
            </Grid.Column>

            <Grid.Column color="purple">
              <Input
                label="ARMOR"
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

            <Grid.Column color="purple">
              <Input
                label="EVASION"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="violet">
              <Input
                label="SHOCK"
                color="yellow"
              />
            </Grid.Column>

            <Grid.Column color="purple">
              <Input
                label="SHOCK RESIS"
                color="yellow"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="violet">
              <Input
                label="FIRE"
                color="red"
              />
            </Grid.Column>

            <Grid.Column color="purple">
              <Input
                label="FIRE RESIS"
                color="red"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column color="violet">
              <Input
                label="COLD"
                color="blue"
              />
            </Grid.Column>

            <Grid.Column color="purple">
              <Input
                label="COLD RESIS"
                color="blue"
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Button color="red">
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
