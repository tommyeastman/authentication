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