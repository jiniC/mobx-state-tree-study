import { types } from "mobx-state-tree";
import ItemList from "./ItemList";

const Invoice = types
	.model('Invoice', {
		is_paid: false,
		currency: types.string,
		itemList: types.optional(ItemList, { items: [] }),
	})
	// chagne data
	.actions(self => ({
		markPaid() {
			self.is_paid = true;
		},
	}))
	// chagne view
	.views(self => ({
		status() {
			return self.is_paid ? 'Paid' : 'Not Paid';
		},
	}));

export default Invoice;
