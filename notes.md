if you have an index.js file, you don't need to specify a file, just the path to the folder where the index file is.
Below common is a folder which houses index.js.

```javascript
import { Header } from './src/components/common';
```
In your index.js file you can use this syntax to import and export all:
```javascript
export * from './Button';
```
If you use this syntax, in Button you have to change from this
```javascript
export default Button;
```
to this
```javascript
export { Button };
```
#TextInput

By default, TextInput has a height and width of 0, just like images.
TextInput doesn't keep the text value.
text value is held as state outside Text Input.
tell TextInput to setState using onChangeText prop.
setState() automatically re-renders the component.
once the component is re-rendered, need to tell text that its value is this.state.text.

```javascript
class LoginForm extends React.Component {
    state = { text: ' '};

    render() {
        return (
            <Card>
                <CardSection />
                    <TextInput 
                    value = {this.state.text}
                    onChangeText={text => this.setState({ text })}
                    />
```

#Expo

Expo will give error about ScrollView being out of sync and components not being exported as a standard error.

#ES6
ES6 condenses key-value pairs so you can write
```javascript
{ text: text}
```
as
```javascript
{ text }
```
need to understand this better.

#Flex
2 siblings
sibling 1 flex:1 space taken up = 1/(1+3)
sibling 2 flex:3 space taken up = 3(1+3)
to center an object (i.e. Spinner), add the following style to the object itself,
NOT the parent object:
```javascript
const styles = {
    spinnerStyle: {
        flex: 1,
        alignItems: 'center'
    }
}
```

#Callback functions
A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. 
[more](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

passed callback function onButtonPress to Button's onPress prop below.
don't understand the bind(this)
```javascript
<Button onPress={this.onButtonPress.bind(this)}>
```

#Authenticating Users
When we authenticate a user against the database, this is an asynchronous request similar to an http request from an API
similarly, this authentication returns a promise

#Spinner
spinner should be functional component.
if i try to render a spinner, i should see a spinner on the screen.

#Conditional rendering
can use functions all over the place to compose your render method.
example below shows conditionally rendering either button or spinner, based on state.
```javascript
renderButton() {
    if(this.state.spinnerShow){
        return( <Spinner/> );
    } 
    
    return (
        <Button onPress={this.onButtonPress.bind(this)}>
        Login
        </Button>
    );
}

<CardSection>
    {this.renderButton()}
</CardSection>
```