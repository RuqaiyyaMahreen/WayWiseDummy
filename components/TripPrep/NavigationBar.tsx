import React from "react";
import { Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

export const NavigationBar = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#FEE2E2",
          borderRadius: 24,
          height: 55,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        <NavItem icon={<ProfileIcon />} label="Profile" />
        <NavItem icon={<HomeIcon />} label="Home" />
        <NavItem icon={<TripPrepIcon />} label="Trip prep" />
      </View>
    </View>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {icon}
      <Text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          color: "#828282",
        }}
      >
        {label}
      </Text>
    </View>
  );
};

const ProfileIcon = () => (
  <Svg width={26} height={25} viewBox="0 0 26 25" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6898 9.37492C16.6898 10.48 16.2508 11.5398 15.4694 12.3212C14.688 13.1026 13.6282 13.5416 12.5231 13.5416C11.418 13.5416 10.3582 13.1026 9.57683 12.3212C8.79543 11.5398 8.35645 10.48 8.35645 9.37492C8.35645 8.26985 8.79543 7.21004 9.57683 6.42864C10.3582 5.64724 11.418 5.20825 12.5231 5.20825C13.6282 5.20825 14.688 5.64724 15.4694 6.42864C16.2508 7.21004 16.6898 8.26985 16.6898 9.37492Z"
      fill="#828282"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5231 1.04163C6.19497 1.04163 1.06476 6.17183 1.06476 12.5C1.06476 18.8281 6.19497 23.9583 12.5231 23.9583C18.8512 23.9583 23.9814 18.8281 23.9814 12.5C23.9814 6.17183 18.8512 1.04163 12.5231 1.04163Z"
      fill="#828282"
    />
  </Svg>
);

const HomeIcon = () => (
  <Svg width={31} height={30} viewBox="0 0 31 30" fill="none">
    <Path
      d="M7.52307 23.75H11.2731V16.25H18.7731V23.75H22.5231V12.5L15.0231 6.875L7.52307 12.5V23.75Z"
      fill="#828282"
    />
  </Svg>
);

const TripPrepIcon = () => (
  <Svg width={31} height={30} viewBox="0 0 31 30" fill="none">
    <Path
      d="M7.21088 25.7841L1.89807 21.045L3.14588 19.6462L8.43432 24.3628L15.6437 17.3831C15.9795 17.058 16.4282 16.8756 16.8956 16.8742C17.363 16.8728 17.8128 17.0525 18.1506 17.3756L21.5481 20.6231L26.7793 15.0234L28.1481 16.3031L22.9159 21.9047C22.7469 22.0856 22.5437 22.2312 22.318 22.333C22.0923 22.4348 21.8487 22.4908 21.6012 22.4978C21.3538 22.5047 21.1074 22.4625 20.8763 22.3736C20.6453 22.2847 20.4342 22.1508 20.2553 21.9797L16.9018 18.7744L9.71495 25.7306C9.38125 26.0538 8.93767 26.2388 8.47322 26.2486C8.00878 26.2583 7.55784 26.093 7.21088 25.7841Z"
      fill="#828282"
    />
  </Svg>
);
