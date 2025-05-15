"use client";

import { useState, type FormEvent } from "react";
import {
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
  Box,
  FormControl,
  FormLabel,
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
        </CardContent>
        <Box sx={{ p: 2 }}>
          <Button type="submit" variant="contained" fullWidth color="primary">
            送信するで
          </Button>
        </Box>
      </form>
    </Card>
  );
}
