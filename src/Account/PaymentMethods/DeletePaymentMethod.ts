import type { APICall, APIFetchSettings } from "../../types";
import type { PaymentMethod, PaymentMethodReq } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default DeletePaymentMethod as APICall<PaymentMethodReq, PaymentMethod>;

async function DeletePaymentMethod(settings: APIFetchSettings, param: PaymentMethodReq) {
  const { id } = param;
  const url_path = `/api/account/payment-methods/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "DELETE" });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
