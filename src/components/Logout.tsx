import { signOut } from "@astro-auth/client";

const Logout = () => {
  return (
    <div>
      <button
        className="rounded-lg bg-[#5865f2] px-4 py-2 font-semibold text-white"
        onClick={() => {
          signOut("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
