import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';

export default {
  title: 'AutocompleteComponent',
  component: AutocompleteComponent,
  decorators: [
    moduleMetadata({
      imports: [MatAutocompleteModule, MatInputModule],
    })
  ],
} as Meta<AutocompleteComponent>;

const Template: Story<AutocompleteComponent> = (args: AutocompleteComponent) => ({
  component: AutocompleteComponent,
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {
}