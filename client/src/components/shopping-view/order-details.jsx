import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

function ShoppingOrderDetailsView() {
    return (
        <DialogContent className="sm:max-w-[600px]">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <div className="flex mt-6 items-center justify-between">
                        <p className="font-medium">Order ID</p>
                        <Label>123456</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Date</p>
                        <Label>27/12/2025</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Price</p>
                        <Label>$500</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Status</p>
                        <Label>In Process</Label>
                    </div>
                </div>
                <Separator />
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Order Details</div>
                        <ul className="grid gap-3">
                            {/* {orderDetails?.cartItems &&
                            orderDetails?.cartItems.length > 0
                                ? orderDetails?.cartItems.map((item) => (
                                      <li className="flex items-center justify-between">
                                          <span>Title: {item.title}</span>
                                          <span>Quantity: {item.quantity}</span>
                                          <span>Price: ${item.price}</span>
                                      </li>
                                  ))
                                : null} */}
                            <li className="flex items-center justify-between">
                                <span>Title: </span>
                                <span>Quantity: </span>
                                <span>Price: $</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Shipping Info</div>
                        <div className="grid gap-0.5 text-muted-foreground">
                            <span>John Joe</span>
                            <span>Address</span>
                            <span>City</span>
                            <span>Pincode</span>
                            <span>Phone</span>
                            <span>notes</span>
                        </div>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
}

export default ShoppingOrderDetailsView;
