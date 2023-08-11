import * as components from './components'
import create from './plugin'

export default create({
  components: Object.keys(components).map(
    key => components[key as keyof object],
  ),
})
