/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('diary_entries').del()
  await knex('diary_entries').insert([
    {
      content: "今日は初めてReactを勉強した！むずかしい…",
      created_at: new Date("2024-11-12 14:00:00")
    },
    {
      content: "いよいよソロプロジェクトが始まった。がんばる！",
      created_at: new Date("2024-11-13 16:00:00")
    },
    {
      content: "息抜きに友達と遊んだ！楽しかった〜",
      created_at: new Date("2024-11-14 21:00:00")
    }
  ]);
};
