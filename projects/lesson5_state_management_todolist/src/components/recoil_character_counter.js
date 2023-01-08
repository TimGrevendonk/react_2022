import SelectorComponent from './recoil_selector_component';
import UpdateComponent from './recoil_update_component';
import ValueComponent from './recoil_value_component';

export default function CharacterCounter() {
  return (
    <div>
      <ValueComponent />
      <UpdateComponent />
      <SelectorComponent />
    </div>
  );
}