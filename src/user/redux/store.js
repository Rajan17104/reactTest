import { createStoreHook } from "react-redux"
import { rootreducer } from "./reducer"


export const configurestore = () => {

    let store = createStore(rootreducer, apply)

}