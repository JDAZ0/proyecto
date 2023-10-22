import { Button } from 'react-native'

function MyButton({onPress, title}) {
  return (
    <Button onPress={onPress} title={title}/>
  )
}

export default MyButton