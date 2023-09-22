import React from "react";

const MainDash = () => {
  return (
    <>
    
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">

        <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
          <div className="rounded-t mb-0 px-0 border-0">
            <div className="flex flex-wrap items-center px-4 py-2">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                  Social Traffic
                </h3>
              </div>
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Referral
                    </th>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Visitors
                    </th>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Facebook
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      5,480
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">70%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div
                              style={{ width: "70%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Twitter
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      3,380
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">40%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div
                              style={{ width: "40%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Instagram
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      4,105
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">45%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                            <div
                              style={{ width: "45%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Google
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      4,985
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Linkedin
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      2,250
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">30%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div
                              style={{ width: "30%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
          <div className="rounded-t mb-0 px-0 border-0">
            <div className="flex flex-wrap items-center px-4 py-2">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                  Recent Activities
                </h3>
              </div>
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
            <div className="block w-full">
              <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Today
              </div>
              <ul className="my-1">
                <li className="flex px-4">
                  <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                    <svg
                      className="w-9 h-9 fill-current text-indigo-50"
                      viewBox="0 0 36 36"
                    >
                      <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                        <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          Nick Mark
                        </a>{" "}
                        mentioned{" "}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          Sara Smith
                        </a>{" "}
                        in a new post
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          View
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="transform transition-transform duration-500 ease-in-out"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex px-4">
                  <div className="w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3">
                    <svg
                      className="w-9 h-9 fill-current text-red-50"
                      viewBox="0 0 36 36"
                    >
                      <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                        The post{" "}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          Post Name
                        </a>{" "}
                        was removed by{" "}
                        <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          Nick Mark
                        </a>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          View
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="transform transition-transform duration-500 ease-in-out"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Yesterday
              </div>
              <ul className="my-1">
                <li className="flex px-4">
                  <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3">
                    <svg
                      className="w-9 h-9 fill-current text-light-blue-50"
                      viewBox="0 0 36 36"
                    >
                      <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                        <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          240+
                        </a>{" "}
                        users have subscribed to{" "}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          Newsletter #1
                        </a>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          View
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="transform transition-transform duration-500 ease-in-out"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDash;
