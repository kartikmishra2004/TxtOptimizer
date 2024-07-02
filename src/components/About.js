import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container" style={{ color: props.Mode === 'light' ? 'black' : 'white' }}>
        <h2>About TxtOptimizer</h2>
        <p>
          Welcome to TxtOptimizer, your ultimate text transformation tool, meticulously crafted to enhance and streamline your writing experience. TxtOptimizer is designed for writers, editors, students, professionals, and anyone who works with text. Our app provides a comprehensive suite of tools that make text conversion and analysis easier and more efficient than ever before. <br /> <br />
          With TxtOptimizer, transforming text is as simple as a few clicks. Whether you need to convert text to uppercase, lowercase, or other formats, TxtOptimizer ensures your text meets the exact formatting requirements. This makes it ideal for preparing professional documents, academic papers, creative projects, and more.
        </p>
        <h3>Features : </h3>
        <p>
          <b>Text Conversion</b> : Instantly convert your text to uppercase, lowercase, or other formats with ease. <br />
          <b>Word Count</b> : Get an accurate word count to help you stay within your limits or reach your goals. <br />
          <b>Character Count</b> : Keep track of the number of characters to meet specific requirements. <br />
          <b>Average Reading Time</b> : Understand how long it will take your audience to read your text, helping you craft content that fits your needs. <br />
          <b>User-Friendly Interface</b> : Enjoy a sleek and intuitive design that makes text transformation a breeze.
        </p>
      </div>
    </>
  );
}
