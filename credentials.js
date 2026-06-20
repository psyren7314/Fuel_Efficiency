// ==========================================
// 【管理者認証ファイル】
// ==========================================

// 管理者ID
const ADMIN_ID = "u7Zne2rH";

// 管理者パスワードの暗号化データ
// ※初期パスワードは「FHQqTiRdun2G7ExQ」に設定されています。
// （「password」をSHA-256でハッシュ化した文字列が以下です）
const ADMIN_PW_HASH = "13725ecf4561211d6582eebcde62a3ffa6026bf53104d014433277863e4e8dea";

// --- 2. 一般ユーザー用 (メインページの閲覧・入力用) ---
const USER_ID = "tL4jzJsB";
// パスワード: bytpDkCUe6E24ZXP （ハッシュ化前の文字列）
const USER_PW_HASH = "de552f4158c669f3d0e34f6bc3051c2a29ee3d9628f4bd24ca9e4a1e94d4ffce";

// --- 3. ユーザー2用 (個別管理用) ---
// 💡 メインページのJavaScriptが自動検知できるように、グローバル変数として定義
const USER2_ID = "Chihiro";
// パスワード: Minami1023
const USER2_PW_HASH = "8a7832b9e862787318200878be2733200b0fe129ee6bd58cb81b1c2336a1bc4c";
