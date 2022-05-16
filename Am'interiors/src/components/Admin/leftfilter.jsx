import React from "react";

function NavigationAdmin() {
  return (
    <div className="grid grid-cols-6 gap-1 ">
        {/* Start of first columns */}
        <div className="bg-slate-700 col-span-1 uppercase p-6 border-l-4 border-orange-100/75 sticky">
            {/* header of filter */}
            <div className="flex items-start justify-center p-2 border-b border-r border-orange-100/75 "> Navigation</div>
            {/* end of filter header*/}
            <div className="p-2"> Home</div>
            <div className="p-2"> Presentation</div>
            <div className="p-2"> Inspirations</div>
            <div className="p-2"> Studio</div>
            <div className="p-2"> Contact</div>
            </div>
        {/* End of first columns */}

        {/* Start of second columns */}
        <div className="bg-slate-500 col-span-5 p-4">Affichage</div>
        {/* End of Second columns */}

        
    </div>
  );
}
export default NavigationAdmin;
