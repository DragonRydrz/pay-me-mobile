import { createBottomTabNavigator } from 'react-navigation';
import InvoicesFlow from './InvoicesFlow';
import RemindersScreen from '../screens/app/RemindersScreen';
import BillingScreen from '../screens/app/billing/BillingScreen';
import SettingsScreen from '../screens/app/SettingsScreen';

const AppFlow = createBottomTabNavigator(
  {
    Invoices: InvoicesFlow,
    Reminders: RemindersScreen,
    Billing: BillingScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Billing',
  }
);

export default AppFlow;
