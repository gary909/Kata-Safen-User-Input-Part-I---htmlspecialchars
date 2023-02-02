function htmlspecialchars(formData) {
    // Insert your code here
}

console.log(htmlspecialchars("<h2>Hello World</h2>")); // "&lt;h2&gt;Hello World&lt;/h2&gt;"
console.log(htmlspecialchars("Hello, how would you & I fare?")); // "Hello, how would you &amp; I fare?"
console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?')); // "How was &quot;The Matrix&quot;?  Did you like it?'
console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>")); 
// "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
