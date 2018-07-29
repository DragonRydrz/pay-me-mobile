import { createBottomTabNavigator } from 'react-navigation';
import InvoicesScreen from '../screens/app/InvoicesScreen';
import RemindersScreen from '../screens/app/RemindersScreen';
import BillingScreen from '../screens/app/BillingScreen';
import SettingsScreen from '../screens/app/SettingsScreen';

const AppFlow = createBottomTabNavigator(
  {
    Invoices: InvoicesScreen,
    Reminders: RemindersScreen,
    Billing: BillingScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Invoices',
  }
);

export default AppFlow;
