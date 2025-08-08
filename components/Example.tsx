import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function Example() {
  const [visible, setVisible] = useState(false);
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<View | null>(null);
  // Pressable is a component, not a type. For ref, use View since Pressable forwards to View.
  const showModal = () => {
    if (buttonRef.current) {
      buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
        // Position modal just below the button
        setModalPos({ x: pageX, y: pageY + height });
        setVisible(true);
      });
    }
  };

  const closeModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Pressable ref={buttonRef} onPress={showModal} style={styles.button}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </Pressable>

      <Modal transparent visible={visible} animationType="none">
        {/* Overlay to catch taps outside modal */}
        <Pressable style={StyleSheet.absoluteFill} onPress={closeModal}>
          {/* Prevent closing modal when tapping inside */}
          <Pressable
            onPress={() => {}}
            style={[styles.modalContent, { top: modalPos.y, left: modalPos.x }]}
          >
            <Text>This appears below the button!</Text>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  modalContent: {
    position: 'absolute',
    width: 200,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
