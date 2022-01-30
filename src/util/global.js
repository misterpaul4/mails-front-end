import preference from "./preference";

const global = {
  inboxPath: `/users/${preference.currentUser}/messages`,
  messagePath: `/users/${preference.currentUser}/messages/:id`,
}

export default global;