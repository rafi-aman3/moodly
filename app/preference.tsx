import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import { Button, ButtonText } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import MoodPalette from "@/views/MoodPalette";
import TrackActivities from "@/views/TrackActivities";
import Reminder from "@/views/Reminder";
import { useColorPalettStore } from "@/store/preference-store";

const PreferencePage = () => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (pagerRef.current) {
      const nextPage = currentPage + 1;
      if (nextPage < 3) {
        // Assuming you have 3 pages
        pagerRef.current.setPage(nextPage);
        setCurrentPage(nextPage);
      }
    }
  };

  const renderDotIndicator = () => {
    return (
      <View className="flex flex-row justify-center items-center gap-2 mb-4">
        {[0, 1, 2].map((index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentPage === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </View>
    );
  };

  const handlePrevPage = () => {
    if (pagerRef.current && currentPage > 0) {
      const prevPage = currentPage - 1;
      pagerRef.current.setPage(prevPage);
      setCurrentPage(prevPage);
    }
  };

  const { bgColor } = useColorPalettStore();

  return (
    <View
      style={{
        backgroundColor: bgColor,
      }}
      className="flex pb-10 pt-[100px] flex-col justify-between w-full container px-4 mx-auto h-full"
    >
      {renderDotIndicator()}
      <PagerView
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        style={{ flex: 1 }}
        scrollEnabled={false}
      >
        <MoodPalette />
        <TrackActivities />
        <Reminder />
      </PagerView>

      <View className="flex pt-4 flex-row gap-4 w-full">
        {currentPage > 0 && (
          <Button
            onPress={handlePrevPage}
            size="xl"
            variant="outline"
            className="flex-1 rounded-3xl border-white"
          >
            <ChevronLeft size={24} color={"#FFF"} />
            <ButtonText className="text-white">BACK</ButtonText>
          </Button>
        )}
        <Button
          onPress={handleNextPage}
          size="xl"
          className={`${
            currentPage === 0 ? " w-full" : "flex-1"
          } bg-[#d84727] rounded-3xl`}
        >
          <ButtonText>NEXT</ButtonText>
          <ChevronRight size={24} color={"#FFF"} />
        </Button>
      </View>
    </View>
  );
};

export default PreferencePage;
