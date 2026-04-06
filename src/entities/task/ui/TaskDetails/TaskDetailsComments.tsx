import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { SendIcon } from "@/shared/icons";

import { user } from "@/assets";

import type { Comment } from "../../model/index";

dayjs.extend(relativeTime);

type TaskDetailsCommentsProps = {
  comments: Comment[];
};

type taskDetailsCommentsItemProps = {
  comment: Comment;
};

export const TaskDetailsComments = ({ comments }: TaskDetailsCommentsProps) => (
  <div className="flex shrink-0 flex-col gap-2 overflow-hidden border-t border-bgPrimary pt-4 mt-4 min-h-0 [@media(max-height:820px)]:max-h-[min(28vh,200px)]">
    <div className="min-h-0 flex-1 overflow-y-auto max-h-60">
      {comments.map((comment) => (
        <TaskDetailsCommentsItem comment={comment} key={comment.id} />
      ))}
    </div>
    <div className="flex items-center gap-4 pt-2 pb-4 shrink-0">
      <img src={user} className="h-8 shrink-0" alt="" />

      <div className="border border-[#E5E5E5] flex w-full gap-3 justify-between py-2 px-4 rounded-[10px]">
        <input
          type="text"
          placeholder="Задайте вопрос или напишите комментарий..."
          className="text-sm flex-1 focus:outline-none"
        />

        <button type="button" className="cursor-pointer shrink-0">
          <SendIcon className="h-6 w-6 text-[#E5E5E5]" />
        </button>
      </div>
    </div>
  </div>
);

const TaskDetailsCommentsItem = ({ comment }: taskDetailsCommentsItemProps) => (
  <div className="flex gap-4 border-t py-4 border-t-bgPrimary first:border-t-0 first:pt-0">
    <img src={user} className="h-8 shrink-0" alt="" />

    <div className="flex flex-col gap-2 min-w-0">
      <div className="text-xs font-semibold flex gap-2 flex-wrap">
        <span className="text-textMain">Nick Khaetsky</span>
        <span className="text-lightGray">
          {dayjs(comment.publishedAt).fromNow()}
        </span>
      </div>

      <div className="text-sm text-textMain break-words">{comment.text}</div>
    </div>
  </div>
);
