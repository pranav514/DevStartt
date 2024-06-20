import React from "react";

type FolderStructureProps = {
  structure: { [key: string]: any };
  prefix?: string;
  isLast?: boolean;
};

const FolderStructure: React.FC<FolderStructureProps> = ({
  structure,
  prefix = '',
  isLast = true,
}) => {
  const keys = Object.keys(structure);

  return (
    <div className="folder-structure bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      {keys.map((key, index) => {
        const isLastKey = index === keys.length - 1;
        const newPrefix = prefix + (isLast ? '    ' : '│   ');

        if (Array.isArray(structure[key])) {
          return (
            <div key={key} className="folder">
              <div className="flex items-center">
                <span className="text-red-500">{prefix}</span>
                <span>{isLast ? '└── ' : '├── '}</span>
                <span className="font-medium">{key}</span>
              </div>
              <div className="ml-4">
                {structure[key].map((item: string, i: number) => (
                  <div key={item} className="flex items-center">
                    <span className="text-red-500">{newPrefix}</span>
                    <span>{i === structure[key].length - 1 ? '└── ' : '├── '}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        } else if (typeof structure[key] === 'object' && structure[key] !== null) {
          return (
            <div key={key} className="folder">
              <div className="flex items-center">
                <span className="text-red-500">{prefix}</span>
                <span>{isLast ? '└── ' : '├── '}</span>
                <span className="font-medium">{key}</span>
              </div>
              <FolderStructure structure={structure[key]} prefix={newPrefix} isLast={isLastKey} />
            </div>
          );
        } else {
          return (
            <div key={key} className="flex items-center">
              <span className="text-red-500">{prefix}</span>
              <span>{isLast ? '└── ' : '├── '}</span>
              <span>{key}</span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FolderStructure;
