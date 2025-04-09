module.exports = {
  disableEmoji: false,
  format: "{emoji} {subject} {scope}",
  list: [
    "test", // テスト
    "feat", // 新機能
    "fix", // バグ修正
    "chore", // ビルドプロセスまたは補助ツールの変更
    "docs", // ドキュメントのみの変更
    "refactor", // バグ修正や機能追加以外のコード変更
    "style", // マークアップ、空白、フォーマット、セミコロンの欠落など
    "ci", // CI関連の変更
    "perf", // パフォーマンスを向上させるコード変更
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    "type", // タイプ
    "scope", // スコープ
    "subject", // 件名
    "body", // 本文
    "breaking", // 破壊的な変更
    "issues", // 関連する課題
    "lerna", // Lerna
  ],
  scopes: [],
  types: {
    chore: {
      description: "ビルドプロセスまたは補助ツールの変更",
      emoji: "🤖",
      value: "chore",
    },
    ci: {
      description: "CI関連の変更",
      emoji: ":construction_worker:",
      value: "ci",
    },
    docs: {
      description: "ドキュメントのみの変更",
      emoji: "✏️",
      value: "docs",
    },
    feat: {
      description: "新機能",
      emoji: "🎸",
      value: "feat",
    },
    fix: {
      description: "バグ修正",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "パフォーマンスを向上させるコード変更",
      emoji: "⚡️",
      value: "perf",
    },
    refactor: {
      description: "バグ修正や機能追加以外のコード変更",
      emoji: "💡",
      value: "refactor",
    },
    release: {
      description: "リリースcommitの作成",
      emoji: "🏹",
      value: "release",
    },
    style: {
      description: "マークアップ、空白、フォーマット、セミコロンの欠落など",
      emoji: "💄",
      value: "style",
    },
    test: {
      description: "不足しているテストの追加",
      emoji: "💍",
      value: "test",
    },
    messages: {
      type: "コミットする変更の種類を選択してください:",
      customScope: "このコンポーネントに影響するスコープを選択してください:",
      subject: "変更の短く、命令的な説明を書いてください:\n",
      body: "変更の詳細な説明を入力してください:\n ",
      breaking: "破壊的な変更をリストしてください:\n",
      footer: "このコミットが解決する課題 (例: #123):",
      confirmCommit: "このコミットが影響を与えたパッケージ\n",
    },
  },
};
