import React from "react";
function Home() {

  return (
    <>
      <div>
        <div className="p-3 d-flex justify-content-around mt-3">
          <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
            <div className="text-center pb-1">
              <h4>Total Students</h4>
            </div>
            <hr />
            <div className="">
              <h5 className="text-center text-danger">4323</h5>
            </div>
          </div>
          <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
            <div className="text-center pb-1">
              <h4>Total Teachers</h4>
            </div>
            <hr />
            <div className="">
              <h5 className="text-center text-danger">42</h5>
            </div>
          </div>
          <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
            <div className="text-center pb-1">
              <h4>Total Workers</h4>
            </div>
            <hr />
            <div className="">
              <h5 className="text-center text-danger">18</h5>
            </div>
          </div>
        </div>
      </div>

      {/* code for another sections */}
      <div className="container">
        <div className="row">
          <div className="col-6">
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
