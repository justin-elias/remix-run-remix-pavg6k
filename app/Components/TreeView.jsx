import React from 'react';
import { Tree } from 'react-arborist';
import { nestedDataSet } from '../../utils/initialData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, forwardRef } from 'react';

export const TreeView = forwardRef(function TreeView() {
  const handleClick = (e) => {
    if (e.target.tagName === 'SPAN') {
      setSelectedId(e.target.id);
    }
  };
  const treeRef = useRef(null);
  const [initialData] = nestedDataSet(16);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="platform-child">
      <h2>Tree View</h2>
      <button type="button" onClick={() => treeRef.current.openAll()}>
        Expand All
      </button>
      <button
        type="button"
        onClick={() => {
          treeRef.current.closeAll();
          setSelectedId(null);
        }}
      >
        Close All
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSelectedId(e.target[0].value);
        }}
      >
        <label>
          Select Id:
          <input type="text" defaultValue={'15'} />
        </label>
        <button type="submit" name="selected">
          Select
        </button>
      </form>
      <Tree
        data={initialData}
        openByDefault={false}
        indent={24}
        rowHeight={36}
        overscanCount={1}
        paddingTop={30}
        paddingBottom={10}
        padding={25 /* sets both */}
        onClick={handleClick}
        ref={treeRef}
        selection={selectedId}
      >
        {TreeNode}
      </Tree>
    </div>
  );
});

function TreeNode({ node, style, dragHandle }) {
  const handleExpandClick = (e) => {
    if (e.target.closest('svg')) {
      e.stopPropagation();
      node.toggle();
    }
  };
  return (
    <div
      className={'tree-row'}
      style={style}
      ref={dragHandle}
      onClick={handleExpandClick}
    >
      {node.isLeaf ? null : (
        <FontAwesomeIcon
          icon={node.isOpen ? faSquareMinus : faSquarePlus}
          width={14}
          height={16}
        />
      )}{' '}
      {
        <span id={node.data.id} className={node.isSelected ? 'selected' : ''}>
          {node.data.name}
        </span>
      }
    </div>
  );
}
