import React from 'react';

export function Input() {
  return (
    <div className={'3dmind-w-full'}>
      <div className={'md:3dmind-flex md:3dmind-items-center 3dmind-justify-between 3dmind-mb-6'}>
        <label
          className={'3dmind-inline-block md:3dmind-text-right 3dmind-whitespace-no-wrap 3dmind-mb-1 md:3dmind-mb-0 3dmind-pr-4 3dmind-align-baseline'}>
          {'Count by:'}
        </label>
        <div
          className={'3dmind-w-full 3dmind-py-1 3dmind-border-b 3dmind-border-b-2 3dmind-border-blue-200'}>
          <input
            name={'countBy'}
            type={'number'}
            placeholder={'Count by'}
            className={'3dmind-w-full focus:3dmind-outline-none 3dmind-text-gray-700 3dmind-align-baseline'}
          />
        </div>
      </div>
      <div className={'md:3dmind-flex md:3dmind-items-center 3dmind-justify-between 3dmind-mb-6'}>
        <label
          className={'3dmind-inline-block md:3dmind-text-right 3dmind-whitespace-no-wrap 3dmind-mb-1 md:3dmind-mb-0 3dmind-pr-4 3dmind-align-baseline'}>
          {'Lorem ipsum dolor amet sum:'}
        </label>
        <div
          className={'3dmind-w-full 3dmind-py-1 3dmind-border-b 3dmind-border-b-2 3dmind-border-blue-200'}>
          <input
            name={'lorem'}
            type={'text'}
            placeholder={'Lorem ipsum'}
            className={'3dmind-w-full focus:3dmind-outline-none 3dmind-text-gray-700 3dmind-align-baseline'}
          />
        </div>
      </div>
    </div>
  );
}
