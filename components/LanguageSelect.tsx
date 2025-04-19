import { View } from "react-native";
import React from "react";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "./ui/select";
import { ChevronDownIcon } from "lucide-react-native";
import { useI18n } from "@/locales/i18nProvider";

const LanguageSelect = () => {
  const { locale, setLocale } = useI18n();

  const languages: Record<string, string> = {
    en: "English",
    bn: "Bangla",
    fr: "French",
    es: "Spanish",
  };

  return (
    <View className=" w-[100px] overflow-hidden">
      <Select
        selectedValue={locale}
        onValueChange={(value) => setLocale(value)}
        className=""
      >
        <SelectTrigger variant="rounded">
          <SelectInput value={languages[locale]} placeholder="Select option" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="English" value="en" />
            <SelectItem label="Bangla" value="bn" />
            <SelectItem label="French" value="fr" />
            <SelectItem label="Spanish" value="es" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
};

export default LanguageSelect;
