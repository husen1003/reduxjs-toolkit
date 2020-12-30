import { createAction } from "@reduxjs/toolkit";

const inc = createAction("inc");
const dec = createAction("dec");

export {
    inc,
    dec,
}