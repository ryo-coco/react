"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  Paper,
  Divider,
  TextField,
  Switch,
  Stack,
  Tooltip,
} from "@mui/material";

export default function SxExamples() {
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const [darkMode, setDarkMode] = useState(false);

  // チェックボックスの状態
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  // チェックボックスの変更を処理
  const handleCheckboxChange = (item: keyof typeof checkedItems) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item],
    });
  };

  return (
    <Box
      sx={{
        // 全体のコンテナスタイル
        maxWidth: "800px",
        mx: "auto", // margin-left と margin-right を auto に設定（中央寄せ）
        p: { xs: 2, sm: 3, md: 4 }, // レスポンシブなパディング
        bgcolor: darkMode ? "#121212" : "#f5f5f5", // ダークモード対応の背景色
        minHeight: "100vh", // 最小の高さをビューポートの高さに
        transition: "background-color 0.3s ease", // 背景色の変更をアニメーション化
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography sx={{ mr: 1, color: darkMode ? "white" : "text.primary" }}>
          ダークモード
        </Typography>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          color="primary"
        />
      </Box>

      <Typography
        variant="h4"
        sx={{
          // タイトルのスタイル
          mb: 4, // margin-bottom: 32px
          textAlign: "center",
          fontWeight: "bold",
          color: darkMode ? "white" : "text.primary",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          letterSpacing: 1, // 文字間隔
          // レスポンシブなフォントサイズ
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" },
          // ホバー時のスタイル
          "&:hover": {
            color: "primary.main",
            transform: "scale(1.01)",
          },
          // アニメーション
          transition: "all 0.2s ease-in-out",
        }}
      >
        Material UI
      </Typography>

      {/* 基本的なカードスタイル */}
      <Card
        sx={{
          mb: 4,
          // 影の効果
          boxShadow: 3,
          // 角丸
          borderRadius: 2,
          // ホバー時のスタイル
          "&:hover": {
            boxShadow: 6,
          },
          // アニメーション
          transition: "box-shadow 0.3s ease",
          // 背景色
          bgcolor: darkMode ? "#1e1e1e" : "white",
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h5"
              sx={{
                color: darkMode ? "white" : "text.primary",
                fontWeight: "medium",
              }}
            >
              基本的なスタイリング
            </Typography>
          }
          sx={{
            // ヘッダーの背景色
            bgcolor: darkMode ? "#333" : "primary.light",
            // テキストの色
            color: darkMode ? "white" : "white",
            // 下の境界線
            borderBottom: "1px solid",
            borderColor: darkMode ? "grey.800" : "primary.main",
          }}
        />
        <CardContent
          sx={{
            // コンテンツのパディング
            p: 3,
            // 最後の子要素のマージンボトムを0に
            "& > :last-child": {
              mb: 0,
            },
          }}
        >
          <TextField
            label="名前を入力してな"
            variant="outlined"
            fullWidth
            sx={{
              mb: 3,
              // ラベルの色
              "& label": {
                color: darkMode ? "grey.400" : "text.secondary",
              },
              // フォーカス時のラベルの色
              "& label.Mui-focused": {
                color: "primary.main",
              },
              // 入力フィールドの背景色
              "& .MuiOutlinedInput-root": {
                bgcolor: darkMode ? "#333" : "white",
                color: darkMode ? "white" : "text.primary",
                // ホバー時の枠線
                "&:hover fieldset": {
                  borderColor: "primary.light",
                },
                // フォーカス時の枠線
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  borderWidth: 2,
                },
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              // ボタンのスタイル
              py: 1.5, // padding-top と padding-bottom
              px: 4, // padding-left と padding-right
              borderRadius: 8, // 角丸
              textTransform: "none", // 大文字変換なし
              fontWeight: "bold",
              // グラデーション背景
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              // ホバー時のスタイル
              "&:hover": {
                background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 10px rgba(0,0,0,0.2)",
              },
              // アクティブ時のスタイル
              "&:active": {
                transform: "translateY(0)",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              },
              // アニメーション
              transition: "all 0.2s ease",
            }}
          >
            送信するで
          </Button>
        </CardContent>
      </Card>

      {/* レスポンシブデザインの例 */}
      <Paper
        sx={{
          mb: 4,
          p: { xs: 2, sm: 3, md: 4 }, // レスポンシブなパディング
          bgcolor: darkMode ? "#1e1e1e" : "white",
          color: darkMode ? "white" : "text.primary",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            color: darkMode ? "primary.light" : "primary.main",
          }}
        >
          レスポンシブデザイン
        </Typography>
        <Divider
          sx={{ mb: 2, borderColor: darkMode ? "grey.800" : "grey.300" }}
        />

        <Box
          sx={{
            // レスポンシブなグリッドレイアウト
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // モバイルでは1列
              sm: "1fr 1fr", // タブレットでは2列
              md: "1fr 1fr 1fr", // デスクトップでは3列
            },
            gap: 2,
          }}
        >
          {[1, 2, 3].map((item) => (
            <Box
              key={item}
              sx={{
                p: 2,
                bgcolor: darkMode ? "#333" : "grey.100",
                borderRadius: 1,
                textAlign: "center",
                // ホバー効果
                "&:hover": {
                  bgcolor: darkMode ? "#444" : "grey.200",
                  transform: "scale(1.02)",
                },
                transition: "all 0.2s ease",
              }}
            >
              <Typography>アイテム {item}</Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* フォーム要素のスタイリング */}
      <Card
        sx={{
          mb: 4,
          bgcolor: darkMode ? "#1e1e1e" : "white",
          color: darkMode ? "white" : "text.primary",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h5"
              sx={{
                color: darkMode ? "white" : "text.primary",
              }}
            >
              フォーム要素のスタイリング
            </Typography>
          }
          sx={{
            bgcolor: darkMode ? "#333" : "secondary.light",
            color: "white",
          }}
        />
        <CardContent>
          <FormControl
            component="fieldset"
            sx={{
              mb: 3,
              width: "100%",
              // フォームコントロールの枠線
              p: 2,
              border: "1px solid",
              borderColor: darkMode ? "grey.800" : "grey.300",
              borderRadius: 1,
              // ホバー時の枠線
              "&:hover": {
                borderColor: "primary.light",
              },
            }}
          >
            <FormLabel
              component="legend"
              sx={{
                color: darkMode ? "primary.light" : "primary.main",
                fontWeight: "medium",
                // フォーカス時の色を維持
                "&.Mui-focused": {
                  color: darkMode ? "primary.light" : "primary.main",
                },
              }}
            >
              どれか一つ選んでや:
            </FormLabel>
            <RadioGroup
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              sx={{
                mt: 1,
                // ラジオボタン間の間隔
                gap: 1,
              }}
            >
              {["option1", "option2", "option3"].map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={
                    <Radio
                      sx={{
                        // ラジオボタンの色
                        color: darkMode ? "grey.600" : "grey.500",
                        // チェック時の色
                        "&.Mui-checked": {
                          color: "secondary.main",
                        },
                        // ホバー時の効果
                        "&:hover": {
                          bgcolor: darkMode
                            ? "rgba(156, 39, 176, 0.1)"
                            : "rgba(156, 39, 176, 0.04)",
                        },
                      }}
                    />
                  }
                  label={`オプション ${option.replace("option", "")}`}
                  sx={{
                    // ラベルのスタイル
                    "& .MuiFormControlLabel-label": {
                      color: darkMode ? "grey.300" : "text.primary",
                      // ホバー時のスタイル
                      "&:hover": {
                        color: darkMode ? "white" : "text.primary",
                      },
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <FormControl
            component="fieldset"
            sx={{
              width: "100%",
              p: 2,
              border: "1px solid",
              borderColor: darkMode ? "grey.800" : "grey.300",
              borderRadius: 1,
              "&:hover": {
                borderColor: "secondary.light",
              },
            }}
          >
            <FormLabel
              component="legend"
              sx={{
                color: darkMode ? "secondary.light" : "secondary.main",
                fontWeight: "medium",
                "&.Mui-focused": {
                  color: darkMode ? "secondary.light" : "secondary.main",
                },
              }}
            >
              複数選んでもええで:
            </FormLabel>
            <FormGroup
              sx={{
                mt: 1,
                // チェックボックス間の間隔
                gap: 1,
              }}
            >
              {Object.keys(checkedItems).map((item) => (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      checked={checkedItems[item as keyof typeof checkedItems]}
                      onChange={() =>
                        handleCheckboxChange(item as keyof typeof checkedItems)
                      }
                      sx={{
                        // チェックボックスの色
                        color: darkMode ? "grey.600" : "grey.500",
                        // チェック時の色
                        "&.Mui-checked": {
                          color: "secondary.main",
                        },
                        // ホバー時の効果
                        "&:hover": {
                          bgcolor: darkMode
                            ? "rgba(156, 39, 176, 0.1)"
                            : "rgba(156, 39, 176, 0.04)",
                        },
                      }}
                    />
                  }
                  label={`アイテム ${item.replace("item", "")}`}
                  sx={{
                    // ラベルのスタイル
                    "& .MuiFormControlLabel-label": {
                      color: darkMode ? "grey.300" : "text.primary",
                    },
                  }}
                />
              ))}
            </FormGroup>
          </FormControl>
        </CardContent>
      </Card>

      {/* 高度なスタイリングの例 */}
      <Paper
        sx={{
          p: 3,
          bgcolor: darkMode ? "#1e1e1e" : "white",
          color: darkMode ? "white" : "text.primary",
          boxShadow: 4,
          borderRadius: 2,
          // 境界線のグラデーション
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
            borderRadius: "2px 2px 0 0",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            color: darkMode ? "#00C9FF" : "#0088cc",
            fontWeight: "bold",
          }}
        >
          高度なスタイリング
        </Typography>
        <Divider
          sx={{ mb: 3, borderColor: darkMode ? "grey.800" : "grey.300" }}
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mb: 3 }}
        >
          <Tooltip title="ホバーしたらツールチップが表示されるで！">
            <Button
              variant="contained"
              sx={{
                bgcolor: darkMode ? "#333" : "grey.200",
                color: darkMode ? "white" : "text.primary",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: darkMode ? "#444" : "grey.300",
                  boxShadow: "none",
                },
              }}
            >
              ホバーしてみて
            </Button>
          </Tooltip>

          <Button
            variant="outlined"
            sx={{
              borderColor: "info.main",
              color: "info.main",
              "&:hover": {
                borderColor: "info.dark",
                bgcolor: "rgba(41, 182, 246, 0.04)",
              },
            }}
          >
            アウトラインボタン
          </Button>

          <Button
            sx={{
              // テキストボタン
              color: "success.main",
              "&:hover": {
                bgcolor: "rgba(76, 175, 80, 0.04)",
              },
            }}
          >
            テキストボタン
          </Button>
        </Stack>

        <Box
          sx={{
            // カスタムアニメーション
            p: 2,
            borderRadius: 1,
            bgcolor: darkMode
              ? "rgba(0, 201, 255, 0.1)"
              : "rgba(0, 201, 255, 0.05)",
            border: "1px dashed",
            borderColor: darkMode
              ? "rgba(0, 201, 255, 0.3)"
              : "rgba(0, 201, 255, 0.2)",
            textAlign: "center",
            // アニメーション
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": {
                boxShadow: "0 0 0 0 rgba(0, 201, 255, 0.2)",
              },
              "70%": {
                boxShadow: "0 0 0 10px rgba(0, 201, 255, 0)",
              },
              "100%": {
                boxShadow: "0 0 0 0 rgba(0, 201, 255, 0)",
              },
            },
          }}
        >
          <Typography>アニメーションもできるで！</Typography>
        </Box>
      </Paper>

      <Typography
        variant="body2"
        sx={{
          mt: 4,
          textAlign: "center",
          color: darkMode ? "grey.500" : "text.secondary",
          // 文字間隔
          letterSpacing: 0.5,
        }}
      >
        これで sx プロパティの勉強になったかな？もっと知りたかったら聞いてな！
      </Typography>
    </Box>
  );
}
