"use client";

import { useState, type FormEvent } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Stack,
  Radio,
  Paper,
  Divider,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Box,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";

export default function FormWithInputs() {
  // ラジオボタンの選択状態
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  // チェックボックスの状態（複数選択できるねん）
  const [checkedItems, setCheckedItems] = useState<{
    item1: boolean;
    item2: boolean;
    item3: boolean;
    item4: boolean;
    item5: boolean;
    item6: boolean;
    item7: boolean;
    item8: boolean;
    item9: boolean;
    item10: boolean;
  }>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
    item9: false,
    item10: false,
  });

  // テキストエリアの内容
  const [resultText, setResultText] = useState<string>("");

  // チェックボックスの変更を処理するねん
  const handleCheckboxChange = (item: keyof typeof checkedItems) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item],
    });
  };

  // フォーム送信の処理やで
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // チェックされたアイテムを集めるで
    const selectedCheckboxes = Object.entries(checkedItems)
      .filter(([_, isChecked]) => isChecked)
      .map(([item]) => item);

    // 送信するデータオブジェクトを作るねん
    const formData = {
      radioSelection: selectedOption,
      checkboxSelections: selectedCheckboxes,
    };

    // データをログに出すわ（実際のアプリではサーバーに送信するやろけど）
    console.log("送信するフォームデータ:", formData);
  };

  // 選択内容をテキストエリアに反映する処理
  const handleReflect = () => {
    // ラジオボタンのラベルを取得
    const radioLabel = `オプション ${selectedOption.replace("option", "")}`;

    // チェックされたチェックボックスのラベルを取得
    const checkedLabels = Object.entries(checkedItems)
      .filter(([_, isChecked]) => isChecked)
      .map(([item]) => `アイテム ${item.replace("item", "")}`);

    // 表示テキストを作成
    let displayText = `選択されたラジオボタン：${radioLabel}\n`;
    displayText += `選択されたチェックボックス：${
      checkedLabels.length > 0 ? checkedLabels.join("、") : "なし"
    }`;

    // テキストエリアに設定
    setResultText(displayText);
  };

  // テキストエリアをクリアする処理
  const handleClear = () => {
    setResultText("");
  };

  return (
    <Card sx={{ maxWidth: "md", mx: "auto", width: "100%" }}>
      <CardHeader
        title={<Typography variant="h5">フォームの例やで</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            オプション選んで送信してな
          </Typography>
        }
      />
      <form onSubmit={handleSubmit}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* ラジオボタンのセクション */}
          <FormControl component="fieldset">
            <FormLabel component="legend">どれか一つ選んでや:</FormLabel>
            <RadioGroup
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <FormControlLabel
                value="option1"
                control={<Radio />}
                label="オプション 1"
              />
              <FormControlLabel
                value="option2"
                control={<Radio />}
                label="オプション 2"
              />
              <FormControlLabel
                value="option3"
                control={<Radio />}
                label="オプション 3"
              />
            </RadioGroup>
          </FormControl>

          {/* チェックボックスのセクション */}
          <FormControl component="fieldset">
            <FormLabel component="legend">複数選んでもええで:</FormLabel>
            <FormGroup sx={{ gap: 1 }}>
              {Object.keys(checkedItems).map((item) => (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      checked={checkedItems[item as keyof typeof checkedItems]}
                      onChange={() =>
                        handleCheckboxChange(item as keyof typeof checkedItems)
                      }
                    />
                  }
                  label={`アイテム ${item.replace("item", "")}`}
                />
              ))}
            </FormGroup>
          </FormControl>
          {/* 選択内容表示セクション */}
          <Paper
            elevation={2}
            sx={{
              p: 2,
              bgcolor: "#f8f8f8",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "grey.300",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: "medium" }}
            >
              選択内容の確認
            </Typography>

            <TextField
              multiline
              fullWidth
              minRows={3}
              value={resultText}
              InputProps={{
                readOnly: true,
                sx: {
                  fontFamily: "monospace",
                  bgcolor: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "grey.400",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "grey.500",
                  },
                },
              }}
              placeholder="「反映」ボタンを押すと、選択内容がここに表示されるで"
              sx={{ mb: 2 }}
            />

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleReflect}
                sx={{
                  px: 3,
                  "&:hover": {
                    bgcolor: "primary.dark",
                    transform: "translateY(-2px)",
                    transition: "all 0.2s",
                  },
                }}
              >
                反映
              </Button>
              <Button
                variant="outlined"
                onClick={handleClear}
                sx={{
                  px: 3,
                  color: "grey.700",
                  borderColor: "grey.400",
                  "&:hover": {
                    bgcolor: "grey.100",
                    borderColor: "grey.600",
                  },
                }}
              >
                クリア
              </Button>
            </Stack>
          </Paper>
        </CardContent>
        <Divider sx={{ mx: 2 }} />
        <Box sx={{ p: 2 }}>
          <Button type="submit" variant="contained" fullWidth color="primary">
            送信するで
          </Button>
        </Box>
      </form>
    </Card>
  );
}
