import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-transparent">
      <h2 className="text-4xl font-bold text-red-500 mb-8">Contact Information</h2>
      <p className="text-gray-300 text-center mb-12 text-lg">
        Feel free to contact us if you have any suggestions or would like to collaborate.
      </p>
      <div className="space-y-12 text-center">
        <div className="flex flex-col items-center space-y-2">
          <img src="https://img.icons8.com/?size=100&id=37246&format=png&color=000000" alt="Gmail" className="h-12 w-12"/>
          <p className="text-gray-300 text-xl">
            Email: <span className="text-white">pranavsalunkhe327@gmail.com</span>
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=228BE6" alt="GitHub" className="h-12 w-12"/>
          <p className="text-gray-300 text-xl">
            GitHub: <a href="https://github.com/pranav514" className="text-white underline">github.com/pranav514</a>
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" className="h-12 w-12"/>
          <p className="text-gray-300 text-xl">
            LinkedIn: <a href="https://www.linkedin.com/in/pranav-salunkhe-89926822a/" className="text-white underline">linkedin.com/in/pranav-salunkhe-89926822a</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
