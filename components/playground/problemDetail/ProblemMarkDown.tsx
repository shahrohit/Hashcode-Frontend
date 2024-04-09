const ProblemMarkDown = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-3">
        <p>
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target.
        </p>
        <p>
          You may assume that each input would have exactly one solution, and
          you may not use the same element twice.
        </p>
        <p> You can return the answer in any order.</p>
      </div>
      <div>
        <p className="font-semibold pb-2">Example 1 :</p>
        <p>
          <span className="font-semibold">Input:</span> nums = [2,7,11,15],
          target = 9{" "}
        </p>
        <p>
          <span className="font-semibold"> Output: </span>[0,1]{" "}
        </p>
        <p>
          <span className="font-semibold"> Explanation: </span>Because nums[0] +
          nums[1] == 9, we return [0, 1].
        </p>
      </div>
      <div>
        <p className="font-semibold pb-2">Example 2 :</p>
        <p>
          <span className="font-semibold">Input:</span> nums = [3,2,4], target =
          6
        </p>
        <p>
          <span className="font-semibold"> Output: </span>[1,2]{" "}
        </p>
        <p>
          <span className="font-semibold"> Explanation: </span>Because nums[0] +
          nums[1] == 9, we return [0, 1].
        </p>
      </div>

      <div>
        <p>Constraints:</p>
        <ul className="">
          <li>{"2 <= nums.length <= 104"}</li>
          <li>{"-109 <= nums[i] <= 109"}</li>
          <li>{"-109 <= target <= 109"}</li>
          <li>Only one valid answer exists.</li>
        </ul>
      </div>
      <div>
        <p>
          <span className="font-semibold"> Follow-up:</span>
          Can you come up with an algorithm that is less than O(n2) time
          complexity?
        </p>
      </div>
    </div>
  );
};

export default ProblemMarkDown;
