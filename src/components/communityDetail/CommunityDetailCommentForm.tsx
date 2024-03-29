'use client';

import React, { ChangeEvent, KeyboardEvent, FormEvent, useState } from 'react';

const CommunityDetailCommentForm = () => {
  const [commentValue, setCommentValue] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (commentValue.length !== 0) {
      e.preventDefault();
      setCommentValue('');
    }
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };

  const onEnterTextarea = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form onSubmit={onSubmit} className="width-100%">
      <textarea
        placeholder="댓글을 달아보세요!"
        className="min-h-[64px] resize-none rounded-lg border border-[#d9d9d9] pt-[24px] xs:min-w-[312px] xs:px-[24px] sm:min-w-[327px] md:w-[380px] md:max-w-[380px]"
        value={commentValue}
        onChange={onChange}
        onKeyDown={onEnterTextarea}
      />
    </form>
  );
};

export default CommunityDetailCommentForm;
