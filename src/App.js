import './App.css';
import DOMPurify from 'dompurify';

function App() {
  const blog=`
  <h3>This is a blog title </h3>
  <p>This is some blog text. There could be <b>bold</b> elements as well as <i>italic</i> elements here! <p>
  
 `;

 const sanitizedBlog=DOMPurify.sanitize(blog)
 return (
   <div className="App">
     <div dangerouslySetInnerHTML={{__html: sanitizedBlog}}>
     </div>
   </div>
 );
}


export default App;
