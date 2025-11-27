import React from "react";
import useGridStore, { SolveMethod } from "../useGridStore";

const NavBar: React.FC = () => {
  const { solveMethod, setSolveMethod } = useGridStore();

  const methods: { id: SolveMethod; name: string; description: string }[] = [
    {
      id: "gaussian",
      name: "Gaussian Elimination",
      description: "الحذف الأمامي فقط (Row Echelon Form)",
    },
    {
      id: "gauss-jordan",
      name: "Gauss-Jordan Elimination",
      description: "الحذف الكامل (Reduced Row Echelon Form)",
    },
  ];

  return (
    <nav className="bg-white shadow-lg rounded-2xl mb-8 border border-blue-100">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center mb-3">
          <h2 className="text-lg font-bold text-gray-800">اختر طريقة الحل</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSolveMethod(method.id)}
              className={`
                relative flex-1 max-w-md px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform
                ${
                  solveMethod === method.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-[1.02] ring-2 ring-blue-400 ring-offset-2"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-[1.01]"
                }
              `}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-base font-bold" dir="ltr">
                  {method.name}
                </span>
                <span
                  className={`text-xs ${
                    solveMethod === method.id
                      ? "text-blue-100"
                      : "text-gray-500"
                  }`}
                >
                  {method.description}
                </span>
              </div>
              {solveMethod === method.id && (
                <div className="absolute top-2 left-2">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
