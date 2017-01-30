import React from "react"

export const Item = () => (
  <div>foo</div>
)

const a = {}
export const actions = {
  ...a,
}

import { schema } from "normalizr"


export const book = new schema.Entity("book")