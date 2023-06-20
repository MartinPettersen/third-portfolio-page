import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
import education from "./education";
import about from "./about";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([education, about, project]),
});
