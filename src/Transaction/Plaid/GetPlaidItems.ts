import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { PlaidItem, PlaidItemQuery } from "./types";

export default GetPlaidItems as APICall<PlaidItemQuery, Array<PlaidItem>>;

const default_embeds = ["accounts"];

function GetPlaidItems(settings: APIFetchSettings, query: PlaidItemQuery) {
  const url_path = "/api/transaction/plaid/items";
  const base_url = getBaseURL(settings);
  const { "embeds[]": embeds = default_embeds, ...query_params } = query;

  const search = toQueryString(query_params as unknown as QueryObject);
  const embeds_query = Array.isArray(embeds)
    ? embeds.reduce((query, embed) => `${query}&embeds[]=${embed}`, "")
    : `&embeds[]=${embeds}`;
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });
  const final_path = `${base_url}${url_path}${search}${embeds_query}`;

  return window.fetch(final_path, fetch_configuration);
}
