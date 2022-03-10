import {
    StyleProp,
    StyleSheet,
    TextStyle,
    ViewStyle,
    TextInput,
    TouchableOpacity,
    KeyboardTypeOptions,
    NativeSyntheticEvent,
    TextInputFocusEventData,
    View,
    Text
} from "react-native";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { commonColor } from "../../constants/Colors";


interface IProps {
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    shadow?: boolean;
    value: string;
    placeholder?: string;
    onChange?: any;
    textType?: any;
    autofocus?: boolean;
    secureTextEntry?: boolean;
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: Boolean;
    onTap?: () => void;
    iconLeftName?: any;
    iconRightName?: any;
    onPressRightIcon?: () => void;
    onPressLeftIcon?: () => void;
    onEndEditing?: () => void;
    onSubmitEditing?: () => void;
    iconVisible?: boolean;
    backspaceKey?: boolean;
    iconColor?: string;
    textDisabled?: boolean;
    editable?: boolean;
    isMaxLength?: boolean;
    helpText?: string;
    textLabel?: string;
    required?: boolean;
    errorMessage?: string;
    divider?: boolean;
    multiline?: boolean;
    touched?: boolean;
    keyboardType?: KeyboardTypeOptions;
    clearButton?: boolean;
    textAlign?: any;
    onFocus?: any;
    scrollEnabled?: boolean;
}

export default function TextField(props: IProps) {
    return (
        <View style={[styles.container, props.containerStyle]} pointerEvents={props.disabled ? "none" : "auto"}>
            {props.textLabel && (
                <Text style={styles.textLabel}>
                    {props.textLabel}
                    {props.required && (
                        <Text style={{ color: 'red' }}>*</Text>
                    )}
                </Text>
            )}

            <View style={[styles.inputSection, props.style, props.shadow ? styles.shadow : {}]}>
                {props.iconLeftName ? <Ionicons name={props.iconLeftName} size={20} style={[styles.iconStyle, { display: props.iconVisible ? "flex" : "none", color: props.iconColor }]} onPress={props.onPressLeftIcon} /> : null}
                <TextInput
                    style={[styles.textInput, props.textStyle]}
                    placeholder={props.placeholder}
                    autoFocus={props.autofocus}
                    value={props.value}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    textContentType={props.textType}
                    secureTextEntry={props.secureTextEntry}
                    placeholderTextColor={'#c9c9c9'}
                    onTouchStart={props.onTap}
                    // onMagicTap={props.onTap}
                    onChangeText={props.onChange}
                    onEndEditing={props.onEndEditing}
                    maxLength={props.isMaxLength ? 30 : undefined}
                    textAlign={props.textAlign ? props.textAlign : 'left'}
                    textAlignVertical={'center'}
                    multiline={props.multiline}
                    onSubmitEditing={props.onSubmitEditing}
                    keyboardType={props.keyboardType ? props.keyboardType : undefined}
                    clearButtonMode={props.clearButton ? "while-editing" : undefined}
                    focusable={true}
                    editable={props.editable}
                    onFocus={props.onFocus}
                    scrollEnabled={props.scrollEnabled}
                />
                {props.iconRightName && (
                    <View style={[styles.iconRightStyle, { display: props.iconVisible && props.iconRightName ? "flex" : "none", borderLeftWidth: props.divider ? 0.5 : 0 }]}>
                        <TouchableOpacity
                            onPress={props.onPressRightIcon}
                        >
                            <Ionicons name={props.iconRightName} size={20} style={[styles.iconStyle, { color: props.iconColor ? props.iconColor : '#C9C9C9' }]} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            {props.errorMessage && props.touched && (
                <Text
                    numberOfLines={4}
                    style={[styles.textLabel, { color: 'red', marginLeft: 5, marginVertical: 5 }]}
                >{props.errorMessage}</Text>
            )}
            {props.helpText && (
                <Text
                    numberOfLines={4}
                    style={styles.helpText}
                >{props.helpText}</Text>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 10
    },
    inputSection: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
        borderColor: "#878787",
        borderWidth: 1,
        borderRadius: 20,
    },
    iconStyle: {
        alignSelf: 'center',
        paddingLeft: 2,
        color: commonColor.black,
    },
    text: {
        fontSize: 14,
    },
    textInput: {
        paddingLeft: 10,
        flex: 1,
        textAlign: 'left',
        alignSelf: 'center',
        fontSize: 14,
        color: "#262626",
        paddingVertical: 0,
    },
    helpText: {
        fontSize: 14,
        color: '#878787',
        textAlign: 'justify',
        marginTop: 10
    },
    textLabel: {
        fontSize: 14,
        color: "#262626",
    },
    shadow: {
        shadowColor: undefined, // IOS
        shadowOffset: { height: 6, width: 0 }, // IOS
        shadowOpacity: 0.2, // IOS
        shadowRadius: 4, //IOS
        elevation: 5, // Android
        backgroundColor: "white",
    },
    iconRightStyle: {
        flex: 0.20,
        borderLeftWidth: 1,
        borderLeftColor: '#eeeee4',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
});