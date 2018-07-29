import { createStackNavigator } from 'react-navigation';
import InvoiceList from '../screens/app/invoices/InvoiceList';

const InvoicesFlow = createStackNavigator(
  {
    InvoiceList: InvoiceList,
    // AddInvoice: AddInvoice,
    // EditInvoice: EditInvoice,
  },
  { initialRouteName: 'InvoiceList' }
);

export default InvoicesFlow;
